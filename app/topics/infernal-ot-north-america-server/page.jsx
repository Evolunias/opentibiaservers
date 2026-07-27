import InfernalOtNorthAmericaServerKeywordPage, { generateMetadata } from './infernal-ot-north-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOtNorthAmericaServerKeywordPage />;
}
