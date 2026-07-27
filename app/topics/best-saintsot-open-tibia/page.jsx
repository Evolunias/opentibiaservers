import BestSaintsotOpenTibiaKeywordPage, { generateMetadata } from './best-saintsot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestSaintsotOpenTibiaKeywordPage />;
}
