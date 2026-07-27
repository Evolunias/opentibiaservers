import MediviaRetroServerBrazilKeywordPage, { generateMetadata } from './medivia-retro-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaRetroServerBrazilKeywordPage />;
}
