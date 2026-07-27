import CustomTibiascapeOpenTibiaKeywordPage, { generateMetadata } from './custom-tibiascape-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiascapeOpenTibiaKeywordPage />;
}
