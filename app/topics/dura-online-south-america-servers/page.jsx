import DuraOnlineSouthAmericaServersKeywordPage, { generateMetadata } from './dura-online-south-america-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineSouthAmericaServersKeywordPage />;
}
