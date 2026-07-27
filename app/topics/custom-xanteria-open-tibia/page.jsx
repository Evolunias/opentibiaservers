import CustomXanteriaOpenTibiaKeywordPage, { generateMetadata } from './custom-xanteria-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomXanteriaOpenTibiaKeywordPage />;
}
