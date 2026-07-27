import InfernalOtUsaServersKeywordPage, { generateMetadata } from './infernal-ot-usa-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOtUsaServersKeywordPage />;
}
