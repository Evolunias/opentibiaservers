import InfernalOtSwedenServersKeywordPage, { generateMetadata } from './infernal-ot-sweden-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOtSwedenServersKeywordPage />;
}
