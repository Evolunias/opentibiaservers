import BestSabrehavenTibiaKeywordPage, { generateMetadata } from './best-sabrehaven-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestSabrehavenTibiaKeywordPage />;
}
