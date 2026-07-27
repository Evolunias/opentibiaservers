import ThorniaResetKeywordPage, { generateMetadata } from './thornia-reset';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaResetKeywordPage />;
}
