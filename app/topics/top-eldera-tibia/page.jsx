import TopElderaTibiaKeywordPage, { generateMetadata } from './top-eldera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopElderaTibiaKeywordPage />;
}
