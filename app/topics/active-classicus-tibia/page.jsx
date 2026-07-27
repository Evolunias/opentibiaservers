import ActiveClassicusTibiaKeywordPage, { generateMetadata } from './active-classicus-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveClassicusTibiaKeywordPage />;
}
