import PopularCyntaraTibiaKeywordPage, { generateMetadata } from './popular-cyntara-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCyntaraTibiaKeywordPage />;
}
