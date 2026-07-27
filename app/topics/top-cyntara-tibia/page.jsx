import TopCyntaraTibiaKeywordPage, { generateMetadata } from './top-cyntara-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCyntaraTibiaKeywordPage />;
}
