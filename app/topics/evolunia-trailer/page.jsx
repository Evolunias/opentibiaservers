import EvoluniaTrailerKeywordPage, { generateMetadata } from './evolunia-trailer';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaTrailerKeywordPage />;
}
