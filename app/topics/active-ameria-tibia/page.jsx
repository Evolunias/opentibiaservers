import ActiveAmeriaTibiaKeywordPage, { generateMetadata } from './active-ameria-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveAmeriaTibiaKeywordPage />;
}
