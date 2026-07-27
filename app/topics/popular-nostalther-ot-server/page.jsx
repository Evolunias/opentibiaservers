import PopularNostaltherOtServerKeywordPage, { generateMetadata } from './popular-nostalther-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNostaltherOtServerKeywordPage />;
}
