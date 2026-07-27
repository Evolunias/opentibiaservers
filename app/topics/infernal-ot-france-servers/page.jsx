import InfernalOtFranceServersKeywordPage, { generateMetadata } from './infernal-ot-france-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOtFranceServersKeywordPage />;
}
