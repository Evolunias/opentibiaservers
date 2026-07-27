import CustomThorniaKeywordPage, { generateMetadata } from './custom-thornia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomThorniaKeywordPage />;
}
