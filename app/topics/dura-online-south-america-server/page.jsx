import DuraOnlineSouthAmericaServerKeywordPage, { generateMetadata } from './dura-online-south-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineSouthAmericaServerKeywordPage />;
}
