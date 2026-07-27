import AlasteraTibiaKeywordPage, { generateMetadata } from './alastera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraTibiaKeywordPage />;
}
