import CustomCoxaotKeywordPage, { generateMetadata } from './custom-coxaot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCoxaotKeywordPage />;
}
