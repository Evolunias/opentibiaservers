import BestClassicusTibiaKeywordPage, { generateMetadata } from './best-classicus-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestClassicusTibiaKeywordPage />;
}
