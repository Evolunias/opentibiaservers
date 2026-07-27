import InfernalOtUsaServerKeywordPage, { generateMetadata } from './infernal-ot-usa-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOtUsaServerKeywordPage />;
}
