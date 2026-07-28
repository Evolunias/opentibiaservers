import MortusOnlinePage, { generateMetadata } from './mortus-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MortusOnlinePage />;
}
