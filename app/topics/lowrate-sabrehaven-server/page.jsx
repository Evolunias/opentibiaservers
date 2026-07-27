import LowrateSabrehavenServerKeywordPage, { generateMetadata } from './lowrate-sabrehaven-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateSabrehavenServerKeywordPage />;
}
