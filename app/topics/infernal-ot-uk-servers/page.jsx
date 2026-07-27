import InfernalOtUkServersKeywordPage, { generateMetadata } from './infernal-ot-uk-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOtUkServersKeywordPage />;
}
