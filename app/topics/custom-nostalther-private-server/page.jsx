import CustomNostaltherPrivateServerKeywordPage, { generateMetadata } from './custom-nostalther-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNostaltherPrivateServerKeywordPage />;
}
