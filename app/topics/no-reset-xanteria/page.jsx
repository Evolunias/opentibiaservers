import NoResetXanteriaKeywordPage, { generateMetadata } from './no-reset-xanteria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetXanteriaKeywordPage />;
}
