import BestAlasteraOpenTibiaKeywordPage, { generateMetadata } from './best-alastera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestAlasteraOpenTibiaKeywordPage />;
}
