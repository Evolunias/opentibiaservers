import NostaltherUkServersKeywordPage, { generateMetadata } from './nostalther-uk-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherUkServersKeywordPage />;
}
