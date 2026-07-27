import EternalOdysseyTrailerKeywordPage, { generateMetadata } from './eternal-odyssey-trailer';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EternalOdysseyTrailerKeywordPage />;
}
