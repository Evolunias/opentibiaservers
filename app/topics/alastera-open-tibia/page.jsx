import AlasteraOpenTibiaKeywordPage, { generateMetadata } from './alastera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraOpenTibiaKeywordPage />;
}
