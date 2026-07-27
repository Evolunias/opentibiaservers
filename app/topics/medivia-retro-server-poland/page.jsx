import MediviaRetroServerPolandKeywordPage, { generateMetadata } from './medivia-retro-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaRetroServerPolandKeywordPage />;
}
