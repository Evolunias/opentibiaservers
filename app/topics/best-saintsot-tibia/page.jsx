import BestSaintsotTibiaKeywordPage, { generateMetadata } from './best-saintsot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestSaintsotTibiaKeywordPage />;
}
