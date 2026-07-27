import EternalOdysseyResetKeywordPage, { generateMetadata } from './eternal-odyssey-reset';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EternalOdysseyResetKeywordPage />;
}
