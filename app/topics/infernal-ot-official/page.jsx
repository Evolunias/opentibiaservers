import InfernalOtOfficialKeywordPage, { generateMetadata } from './infernal-ot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOtOfficialKeywordPage />;
}
