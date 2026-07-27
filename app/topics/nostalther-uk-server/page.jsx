import NostaltherUkServerKeywordPage, { generateMetadata } from './nostalther-uk-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherUkServerKeywordPage />;
}
