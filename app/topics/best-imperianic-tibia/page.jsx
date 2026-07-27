import BestImperianicTibiaKeywordPage, { generateMetadata } from './best-imperianic-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestImperianicTibiaKeywordPage />;
}
