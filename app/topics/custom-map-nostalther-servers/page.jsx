import CustomMapNostaltherServersKeywordPage, { generateMetadata } from './custom-map-nostalther-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapNostaltherServersKeywordPage />;
}
