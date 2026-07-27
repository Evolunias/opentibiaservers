import CustomTibiascapeTibiaKeywordPage, { generateMetadata } from './custom-tibiascape-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiascapeTibiaKeywordPage />;
}
