import PopularClassickDrakoriaTibiaKeywordPage, { generateMetadata } from './popular-classick-drakoria-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularClassickDrakoriaTibiaKeywordPage />;
}
