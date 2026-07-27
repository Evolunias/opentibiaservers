import InfernalOtFranceServerKeywordPage, { generateMetadata } from './infernal-ot-france-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOtFranceServerKeywordPage />;
}
