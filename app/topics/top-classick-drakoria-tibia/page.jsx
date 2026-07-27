import TopClassickDrakoriaTibiaKeywordPage, { generateMetadata } from './top-classick-drakoria-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopClassickDrakoriaTibiaKeywordPage />;
}
