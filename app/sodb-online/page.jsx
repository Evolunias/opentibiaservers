import SodbOnlinePage, { generateMetadata } from './sodb-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SodbOnlinePage />;
}
