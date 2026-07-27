import TopImperianicTibiaKeywordPage, { generateMetadata } from './top-imperianic-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopImperianicTibiaKeywordPage />;
}
