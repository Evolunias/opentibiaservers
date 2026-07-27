import NoResetThorniaKeywordPage, { generateMetadata } from './no-reset-thornia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetThorniaKeywordPage />;
}
