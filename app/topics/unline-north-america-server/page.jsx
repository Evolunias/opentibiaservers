import UnlineNorthAmericaServerKeywordPage, { generateMetadata } from './unline-north-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineNorthAmericaServerKeywordPage />;
}
