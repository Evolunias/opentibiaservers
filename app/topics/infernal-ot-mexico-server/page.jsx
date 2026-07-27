import InfernalOtMexicoServerKeywordPage, { generateMetadata } from './infernal-ot-mexico-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOtMexicoServerKeywordPage />;
}
