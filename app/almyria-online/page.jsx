import AlmyriaOnlinePage, { generateMetadata } from './almyria-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlmyriaOnlinePage />;
}
