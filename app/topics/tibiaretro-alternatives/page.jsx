import TibiaretroAlternativesKeywordPage, { generateMetadata } from './tibiaretro-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroAlternativesKeywordPage />;
}
