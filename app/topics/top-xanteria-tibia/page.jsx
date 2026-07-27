import TopXanteriaTibiaKeywordPage, { generateMetadata } from './top-xanteria-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopXanteriaTibiaKeywordPage />;
}
