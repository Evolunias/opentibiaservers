import PopularNostaltherOfficialKeywordPage, { generateMetadata } from './popular-nostalther-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNostaltherOfficialKeywordPage />;
}
